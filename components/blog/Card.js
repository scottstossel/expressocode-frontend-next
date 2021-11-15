

const Card = ({blog}) => {
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
                Written by {blog.postedBy.name} | Published {moment(blog.updatedAt).fromNow()}
              </p>
            </section>
            <section>
              <p>Blog categories and tags</p>
            </section>
            <div className="row">
              <div className="col-md-4">image</div>
              <div className="col-md-8">
                <section>
                <div className="pb-3">
                  {renderHTML(blog.excerpt)}
                </div>
                  <Link href={`/blogs/${blog.slug}`}>
                    <a className="btn btn-primary pt-2">Read more</a>
                  </Link>
                </section>
              </div>
            </div>
          </div>
  )
}

export default Card;