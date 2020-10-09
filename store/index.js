import Vuex from "vuex";
import { getDb } from "../lib/db.js";

const createStore = () => {
  const dbHandle = getDb();
  return new Vuex.Store({
    state: {
      posts: [],
      zines: []
    },
    mutations: {
      setPosts(state, posts) {
        console.log("setPosts I was called");
        state.posts = posts;
        console.log(`... and I have ${state.posts.length} posts`);
      },
      addPost(state, post) {
        state.posts.unshift(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.posts.findIndex(
          post => post._key === editedPost._key
        );
        state.posts[postIndex] = editedPost;
        console.log(state.posts);
      },
      setZines(state, zines) {
        console.log("setZines I was called");
        state.zines = zines;
        console.log(`... and I have ${state.zines.length} zines`);
      },
      addZine(state, zine) {
        state.zines.unshift(zine);
      },
      editZine(state, editedZine) {
        const zineIndex = state.zines.findIndex(
          zine => zine._key === editedZine._key
        );
        state.zines[zineIndex] = editedZine;
        console.log(state.zines);
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        console.log("SERVER INIT");
        const postsArray = [];
        const zinesArray = [];
        try {
          let cursor;
          cursor = await dbHandle().query("FOR d IN zines SORT d.createdDate DESC RETURN d");
          const zines = await cursor.all();
          zines.map(zine => {
            zinesArray.push(zine);
          });
          vuexContext.commit("setZines", zinesArray);
          cursor = await dbHandle().query("FOR d IN posts SORT d.createdDate DESC RETURN d");
          const posts = await cursor.all();
          posts.map(post => {
            postsArray.push(post);
          });
          vuexContext.commit("setPosts", postsArray);

        } catch (e) {
          console.log(e)
        }

      },

      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date(),
          createdDate: new Date()
        };
        const collection = dbHandle().collection("posts");
        return collection
          .save(createdPost)
          .then(data => {
            vuexContext.commit("addPost", { ...createdPost, _key: data._key });
          })
          .catch(e => console.log(e));
      },
      editPost(vuexContext, post) {
        const editedPost = {
          ...post,
          updatedDate: new Date()
        };
        const collection = dbHandle().collection("posts");
        return collection.update(editedPost._key, editedPost).then(
          meta => {
            vuexContext.commit("editPost", editedPost);
          },
          err => console.error("Failed to update document:", err)
        );
        console.log(editedPost._key);
      },
      addZine(vuexContext, zine) {
        const createdZine = {
          ...zine,
          updatedDate: new Date(),
          createdDate: new Date()
        };
        const collection = dbHandle().collection("zines");
        return collection
          .save(createdZine)
          .then(data => {
            vuexContext.commit("addZine", { ...createdZine, _key: data._key });
          })
          .catch(e => console.log(e));
      },
      editZine(vuexContext, zine) {
        const editedZine = {
          ...zine,
          updatedDate: new Date()
        };
        const collection = dbHandle().collection("zines");
        return collection.update(editedZine._key, editedZine).then(
          meta => {
            vuexContext.commit("editZine", editedZine);
          },
          err => console.error("Failed to update document:", err)
        );
        // console.log(editedZine._key);
      }
    },
    getters: {
      posts(state) {
        // console.log(state.posts);
        return state.posts;
      },
      zines(state) {
        // console.log(state.posts);
        return state.zines;
      }
    }
  });
};

export default createStore;



 // get all saved posts
    // dbHandle()
    //   .query("FOR d IN posts SORT d.createdDate DESC RETURN d")
    //         .then(cursor => cursor.all())
    //         .then(docs => {
    //           docs.map(doc => {
    //             postsArray.push(doc);
    //           });
    //           vuexContext.commit("setPosts", postsArray);
    //           // console.log(vuexContext.state.posts);
    //         })
    //         .catch(e => console.log(e));
    //     },