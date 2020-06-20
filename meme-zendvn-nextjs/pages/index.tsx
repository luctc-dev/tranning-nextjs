import React from "react";
import { HomeSidebar } from "../components/HomeSidebar";
import { PostListItem } from "../components/PostListItem";
import { GetServerSideProps, NextPageContext } from "next";
import { InferGetServerSidePropsType } from "next";
import postService from "../services/postService";
import { getTokenSSRAndCSS } from "../helpers";

export type PostType = {
  PID: string;
  USERID: string;
  fullname: string;
  profilepicture: string;
  url_image: string;
  post_content: string;
  time_added: string;
  status: string;
  count: string | null;
}

type HomeDataProps = {
  listPosts: PostType[];
  userPosts: PostType[];
}

type HomeProps = React.FC<InferGetServerSidePropsType<typeof getServerSideProps>>;

const Home: HomeProps = ({ listPosts, userPosts }) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <PostListItem listPosts={listPosts} />
        </div>
        <div className="col-lg-4">
          <HomeSidebar userPosts={userPosts}/>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeDataProps> = async (context) => {
  const ctx = context as NextPageContext;
  const [token, userToken] = getTokenSSRAndCSS(ctx);
  const userid = userToken?.id;

  const listPostsPos = postService.getPostsPaging();
  const userPostsPos = postService.getPostsByUserId({ token, userid });

  const [listPostsRes, userPostsRes ] = await Promise.all([listPostsPos, userPostsPos]);

  const props = {
    listPosts: listPostsRes?.posts || [],
    userPosts: userPostsRes?.posts || [],
  }

  return {
    props, 
  }
}


export default Home;