import { HomeSidebar } from "../components/HomeSidebar";
import { PostListItem } from "../components/PostListItem";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <PostListItem />
        </div>
        <div className="col-lg-4">
          <HomeSidebar />
        </div>
      </div>
    </div>
  )
}
