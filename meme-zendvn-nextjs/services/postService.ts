import api from "./api";

type ObjImage = {
    file: File | null;
    base64: string;
}

type TypePostCreate = {
    post_content: string;
    url_image: string;
    category: string[];
    obj_image: ObjImage;
}

const postService = {
    createNewPost: async ({ post_content, url_image, category, obj_image }: TypePostCreate, token: string) => {
        const url = `/post/addNew.php`;

        const data = new FormData();
        data.append("post_content", post_content);
        data.append("category", category.toString());
        data.append("url_image", url_image);

        if(obj_image.file) {
            data.append("obj_image", obj_image.file);
        }

        return api.callFormData(url, { data, token })
    },
    getPostsPaging: async({ pagesize = 3, currPage = 1 } = {}) => {
        const params = `pagesize=${pagesize}&currPage=${currPage}`
        const url = `/post/getListPagination.php?${params}`;
        return api.callJson(url);
    },
    getPostsPagingByCategory: async({ pagesize = 10, currPage = 1, tagIndex = '' } = {}) => {
        if(!tagIndex) return null;

        const params = `pagesize=${pagesize}&currPage=${currPage}&tagIndex=${tagIndex}`;
        const url = `/post/getListByCategory.php?${params}`;
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
    getPostsByPostId: async({ postid, token }) => {
        if(!postid || !token) {
            return {
                status: 500,
                error: '',
            }
        }

        const url = `/post/post.php?postid=${postid}`;
        return api.callJson(url, {
            token
        })
    },
    getPostSearch: async ({ query }) => {
        return api.callJson(`/post/search.php?query=${encodeURI(query)}`);
    },
    getCategories: async () => {
        return api.callJson('/categories/index.php');
    },
    getCommentByPostId: async (postid: string) => {
        const url = `/comment/comments.php?postid=${postid}`;
        return api.callJson(url);
    },
    postComment: async (postid: string, comment: string, token: string) => {
        const url = '/comment/add_new.php';
        const data = {
            postid,
            comment,
        }
        const method = "POST";
        return api.callJson(url, {
            data,
            token,
            method
        })
    }
}

export default postService;