import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blogActions';
import { API } from '../../config';

const Blogs = () => {
  return (
    <>
      <Layout>
        <main>
          <div className="container-fluid">
            <header>
              <div className="col-md-12 pt-3">
                <h1 className="display-4 font-weight-bold text-center">Programming blogs and tutorials</h1>
              </div>
              <section>
                <p>show categories and tags</p>
              </section>
            </header>
          </div>
          <div className="container-fluid">
            <div className="col-md-12">show all blogs</div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Blogs; //getInitialProps