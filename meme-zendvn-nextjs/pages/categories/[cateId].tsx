import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { NextPageContext, NextPage } from "next";
import { PostItem } from "../../components/PostItem";
import { PostType } from "../index";
import Masonry from 'react-masonry-component';
import postService from "../../services/postService";
import { useGlobalState } from "../../state";

type PropsType = {
    listPosts: PostType[]
}

const SearchPage: NextPage<PropsType> = ({ listPosts }) => {
    const router = useRouter();
    const categoryId =  router.query.cateId || null;
    const [categories] = useGlobalState("categories");

    useEffect(() => {
        if(!categoryId) {
            router.push('/');
        }
    }, [categoryId])

    const findText = useMemo(() => {
        const findObj = categories.find((o) => o.id === Number(categoryId))
        return findObj?.text || '';
    }, [categories, categoryId])

    return (
        <div className="container">
            <div className="header-search" style={{ padding: '30px 0' }}>
                <h3>Danh muc tìm kiếm: <strong>{findText}</strong></h3>
                <p>Tìm kiếm được ({listPosts.length}) kết quả</p>
            </div>

            <Masonry className="ass1-section__wrap row ass1-section__isotope-init">
                {
                    listPosts.map(post => (
                        <PostItem 
                            key={post.PID} 
                            post={post} 
                            customClass="col-lg-6"
                        />
                    ))
                }
            </Masonry>
        </div>
    )
}

SearchPage.getInitialProps = async (ctx: NextPageContext) => {
    const tagIndex = ctx.query.cateId as string;
    const listPostsRes = await postService.getPostsPagingByCategory({ tagIndex });

    return {
        listPosts: listPostsRes?.posts || []
    }
}

export default SearchPage