import { useParams, Link } from 'react-router-dom';
import blogsData from '../Components/BlogsData';

const SingleBlogPage = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === parseInt(id || ''));
  
  // Get related articles (excluding current blog)
  const relatedArticles = blogsData
    .filter(b => b.id !== blog?.id && b.category === blog?.category)
    .slice(0, 3);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md border border-purple-100">
          <div className="flex justify-center mb-4">
            <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Not Found</h2>
          <p className="text-gray-600 mb-6">The pet grooming article you're looking for doesn't exist.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              to="/"
              className="inline-flex items-center justify-center bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link 
              to="/blogs"
              className="inline-flex items-center justify-center bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Blog Header with Background Image */}
      <div 
        className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white py-16"
        style={{
          backgroundImage: `url('https://ohmypetgrooming.in/wp-content/uploads/2023/12/cute-puppy-foam-bath-banner-generative-ai-1.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col justify-end h-full">
            <div className="max-w-3xl ml-auto text-right">
              <div className="bg-orange-500 text-white px-4 py-1 mt-20 rounded-full text-sm font-medium inline-block mb-4">
                {blog.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-end gap-4 text-[#232C63] md:text-white opacity-90">
                <div className="flex items-center">
                  <div>
                    <div className="font-medium">{blog.author}</div>
                    <div className="text-sm opacity-80">Pet Care Expert</div>
                  </div>
                  <img 
                    src={`https://ui-avatars.com/api/?name=${blog.author}&background=random`} 
                    alt={blog.author} 
                    className="w-10 h-10 rounded-full ml-3"
                  />
                </div>
                <div className="flex items-center">
                  {blog.date}
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center">
                  {blog.readTime}
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden shadow-lg mb-10 border border-purple-100">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-auto md:h-[50vh] "
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {blog.content}
            </p>
          </div>

          {/* Author Section */}
          <div className="mt-16 pt-8 border-t border-purple-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">About the Author</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img 
                src={`https://ui-avatars.com/api/?name=${blog.author}&background=random`} 
                alt={blog.author} 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{blog.author}</h3>
                <p className="text-gray-600 mb-2">Professional pet groomer and animal care specialist with extensive experience in all breeds.</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Based in New York, NY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-16 pt-8 border-t border-purple-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article) => (
                  <Link 
                    key={article.id} 
                    to={`/blog/${article.id}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-purple-100 group"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                        {article.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
            <Link 
              to="/blogs"
              className="inline-flex items-center justify-center text-purple-600 font-medium hover:text-purple-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to all articles
            </Link>
            <Link 
              to="/"
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Back to Home
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;