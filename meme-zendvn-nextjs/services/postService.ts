import api from "./api";


const postService = {
    getPostsPaging: async({ pagesize = 3, currPage = 1 } = {}) => {
        const params = `pagesize=${pagesize}&currPage=${currPage}`
        const url = `/post/getListPagination.php?${params}`;
        return api.callJson(url);
    },
    getPostsByUserId: async({ userid, token }) => {
        if(!userid || !token) {
            return {
                status: 200,
                posts: []
            }
        }

        const url = `/post/getListPostUserID.php?userid=${userid}`;
        return api.callJson(url, {
            token,
        })
    },
    getPostSearch: async ({ query }) => {
        return api.callJson(`/post/search.php?query=${encodeURI(query)}`);
    }
}

export default postService;