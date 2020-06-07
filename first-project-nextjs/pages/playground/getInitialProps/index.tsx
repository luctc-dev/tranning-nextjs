import React from "react";
import Link from 'next/link'
import { NextPage, NextPageContext } from 'next'

const BASE_URL = "http://api-meme-zendvn-01.herokuapp.com/api"

type PostType = {
    PID: string;
    post_content: string;
}
type PropsType = {
    posts: PostType[]
}

const DemoGetIntialProps: NextPage<PropsType> = ({ posts }: PropsType) => {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     fetch(BASE_URL + '/post/getListPagination.php?pagesize=5&currPage=1')
    //         .then(async (response) => {
    //             const data = await response.json();
    //             console.log(data.posts);
    //             setPosts(data.posts);
    //         })
            
    // }, [])

    return (
        <div className="container">
            <h1>Demo GetIntialProps</h1>
            <Link href="/playground/getInitialProps/test">
                <a>Di chuyen qua trang Test</a>
            </Link>
            <ul>
                {
                    posts.map((post) => {
                        return <li key={post.PID}>{post.post_content}</li>
                    })
                }
            </ul>
        </div>
    )
}

/*

1. F5: Request lai len phia server -> Nhan lai HTML hoan toan moi

2. Di chuyen qua lai giua cac trang trong App (Thong qua Router Link cua NextJs)
    - Vua la Server side render
    - Vua la Client side render

    - Trong lan load trang dau tien
        -> User nhan duoc HTML hoan chinh khi request len Server
        -> Trong ma nguon HTML chua nhung file javascript lien quan toi React
        -> Sau do App se tro thanh Client Side Render

*/

DemoGetIntialProps.getInitialProps = async (ctx: NextPageContext) => {
    const response = await fetch(BASE_URL + '/post/getListPagination.php?pagesize=5&currPage=1');
    const data = await response.json();

    return {
        posts: data.posts
    }
}

export default DemoGetIntialProps;