import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listBlogsWithCategoriesAndTags } from "../../actions/blogActions";
// import { API } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME } from "../../config";
import { withRouter } from "next/router";

const Blogs = ({ blogs, categories, tags, size, router }) => {
  const head = () => (
    <Head>
      <title>Programming blogs | {APP_NAME}</title>
      <meta
        name="description"
        content="Programming blogs and tutorials on react node next vue php laravel and web development"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Your digital hangout for all things programming related | ${APP_NAME}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />
      
      <meta property="og:image" content={`${APP_NAME}`} />
      <meta property="og:image:secure_url" content={`${APP_NAME}`} />
      <meta property="og:image:type" content={`${APP_NAME}`} />
      <meta property="fb:app_id" content={`${APP_NAME}`} />
    </Head>
  );

  const showAllCategories = () => {
    return categories.map((c, i) => (
      <Link href={`/categories/${c.slug}`} key={i}>
        <a className="btn btn-primary mt-3" style={{ marginRight: "5px" }}>
          {c.name}
        </a>
      </Link>
    ));
  };
  const showAllTags = () => {
    return tags.map((t, i) => (
      <Link href={`/tags/${t.slug}`} key={i}>
        <a
          className="btn btn-outline-primary mt-3"
          style={{ marginRight: "5px" }}
        >
          {t.name}
        </a>
      </Link>
    ));
  };

  const showAllBlogs = () => {
    return blogs.map((blog, i) => (
      <>
        <article key={i} className="lead pb-4">
          <Card blog={blog} />
          <hr />
        </article>
      </>
    ));
  };
  return (
    <>
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="display-4 font-weight-bold text-center">
                  Programming blogs and tutorials
                </h1>
              </div>
              <section>
                <div className="pb-5 text-center">
                  {showAllCategories()}
                  <br />
                  {showAllTags()}
                </div>
              </section>
            </header>
          </div>
          <div className="container-fluid">
            <div className="col-md-12">{showAllBlogs()}</div>
          </div>
        </main>
      </Layout>
    </>
  );
};

Blogs.getInitialProps = () => {
  return listBlogsWithCategoriesAndTags().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        size: data.size,
      };
    }
  });
};

export default Blogs; //getInitialProps
