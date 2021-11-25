import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a
          className="btn btn-primary mt-3"
          style={{ marginRight: "5px" }}
        >
          {c.name}
        </a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/categories/${t.slug}`}>
        <a
          className="btn btn-outline-primary mr-2 ml-2 mt-3"
          style={{ marginRight: "5px" }}
        >
          {t.name}
        </a>
      </Link>
    ));

  return (
    <div className="lead">
      <header>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <h2 className="pt-3 pb-3 font-weight-bold">{blog.title}</h2>
          </a>
        </Link>
      </header>
      <section>
        <p className="mark ml-1 pt-2 pb2">
          Written by {blog.postedBy.name} | Published{" "}
          {moment(blog.updatedAt).fromNow()}
        </p>
      </section>
      <section>
        {showBlogCategories(blog)}
        {showBlogTags(blog)}
        <br />
      </section>
      <div className="row">
        <div className="col-md-4">
          <section>
            <img className="img img-fluid mt-3" style={{maxHeight: '150px', width: 'auto'}} src={`${API}/blog/photo/${blog.slug}`} 
            alt={blog.title} />
          </section>
        </div>
        <div className="col-md-8">
          <section>
            <div className="pb-3">{renderHTML(blog.excerpt)}</div>
            <Link href={`/blogs/${blog.slug}`}>
              <a className="btn btn-primary pt-2">Read more</a>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Card;
