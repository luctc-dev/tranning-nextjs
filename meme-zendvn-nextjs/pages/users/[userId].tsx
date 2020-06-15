import { UserDetailInfo } from "../../components/UserDetailInfo";
import { UserDetailPosts } from "../../components/UserDetailPosts";

export default function UserDetail() {
    return (
        <div className="container">
            <UserDetailInfo />

            <UserDetailPosts />
        </div>
    )
}