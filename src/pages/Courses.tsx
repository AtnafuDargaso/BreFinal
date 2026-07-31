import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

interface Post {
  id: string;
  title: string;
  category: string;
  link_url: string;
  created_at: string;
}

export function Courses() {
  const [courses, setCourses] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [signedUp, setSignedUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedSignup = window.localStorage.getItem('courses-signup-complete');
    if (storedSignup === 'true') {
      setSignedUp(true);
    }

    async function fetchCourses() {
      if (!supabase) {
        setLoading(false);
        return;
      }
      
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('category', 'course')
        .order('created_at', { ascending: false });
        
      if (!error && data) {
        setCourses(data);
      }
      setLoading(false);
    }
    
    fetchCourses();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-slate-900 text-white p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 rounded-3xl border border-amber-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 shadow-2xl shadow-amber-500/10 sm:p-8">
          <h1 className="text-4xl font-bold mb-4 text-amber-400">Courses</h1>
          <p className="text-gray-300 mb-6 max-w-2xl">Register below to join the course community and receive access details for each spiritual growth and Bible study course.</p>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/70 p-4 sm:p-6">
            <div id="mc_embed_shell" className="w-full">
              <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
              <style>{`#mc_embed_signup{background:#fff;clear:left;font:14px Helvetica,Arial,sans-serif;width:100%;max-width:100%;color:#111827;} #mc_embed_signup input[type="email"], #mc_embed_signup input[type="text"], #mc_embed_signup select {border:1px solid #d1d5db; border-radius:8px; padding:10px 12px;} #mc_embed_signup .button {background:#f59e0b !important; border-radius:999px; padding:12px 20px;}`}</style>
              <div id="mc_embed_signup">
                <form
                  action="https://berhanutadesse.us2.list-manage.com/subscribe/post?u=e81959f6ca56e1ad6a7daee4d&amp;id=19b7c9c80b&amp;f_id=009056e1f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  onSubmit={() => {
                    setIsSubmitting(true);
                    window.localStorage.setItem('courses-signup-complete', 'true');
                    setSignedUp(true);
                  }}
                >
                  <div id="mc_embed_signup_scroll">
                    <h2 className="text-xl font-semibold text-slate-900">Join the Course List</h2>
                    <div className="indicates-required text-sm text-slate-600"><span className="asterisk">*</span> indicates required</div>
                    <div className="mc-field-group mt-4">
                      <label htmlFor="mce-EMAIL" className="mb-2 block text-sm font-medium text-slate-700">Email Address <span className="asterisk">*</span></label>
                      <input type="email" name="EMAIL" className="required email w-full" id="mce-EMAIL" required defaultValue="" />
                    </div>
                    <div className="mc-field-group mt-4">
                      <label htmlFor="mce-FNAME" className="mb-2 block text-sm font-medium text-slate-700">First Name</label>
                      <input type="text" name="FNAME" className="w-full" id="mce-FNAME" defaultValue="" />
                    </div>
                    <div className="mc-field-group mt-4">
                      <label htmlFor="mce-LNAME" className="mb-2 block text-sm font-medium text-slate-700">Last Name</label>
                      <input type="text" name="LNAME" className="w-full" id="mce-LNAME" defaultValue="" />
                    </div>
                    <div className="mc-address-group mt-4">
                      <div className="mc-field-group">
                        <label htmlFor="mce-ADDRESS-addr1" className="mb-2 block text-sm font-medium text-slate-700">Address</label>
                        <input type="text" maxLength={70} name="ADDRESS[addr1]" id="mce-ADDRESS-addr1" className="w-full" defaultValue="" />
                      </div>
                      <div className="mc-field-group mt-4">
                        <label htmlFor="mce-ADDRESS-city" className="mb-2 block text-sm font-medium text-slate-700">City</label>
                        <input type="text" maxLength={40} name="ADDRESS[city]" id="mce-ADDRESS-city" className="w-full" defaultValue="" />
                      </div>
                      <div className="mc-field-group mt-4">
                        <label htmlFor="mce-ADDRESS-country" className="mb-2 block text-sm font-medium text-slate-700">Country</label>
                        <select name="ADDRESS[country]" id="mce-ADDRESS-country" className="w-full">
                          <option value="USA" selected>USA</option>
                          <option value="Ethiopia">Ethiopia</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div id="mce-responses" className="clear mt-4">
                      <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                      <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                      <input type="text" name="b_e81959f6ca56e1ad6a7daee4d_19b7c9c80b" tabIndex={-1} defaultValue="" />
                    </div>
                    <div className="clear mt-5">
                      <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button cursor-pointer" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Sign Up for Courses'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {signedUp ? (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-200">
            <h2 className="text-2xl font-bold mb-2">Thank you for signing up!</h2>
            <p>Your information has been submitted. You will receive course access details soon.</p>
          </div>
        ) : null}

        {!signedUp && loading ? (
          <p className="text-gray-400">Loading courses...</p>
        ) : null}

        {signedUp && loading ? (
          <p className="text-gray-400">Loading courses...</p>
        ) : null}

        {signedUp && !loading && courses.length === 0 ? (
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 text-center">
            <h2 className="text-2xl font-bold mb-4">No courses available yet</h2>
            <p className="text-gray-400">Check back soon for new educational content.</p>
          </div>
        ) : null}

        {signedUp && !loading && courses.length > 0 ? (
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {courses.map(course => (
              <div key={course.id} className="bg-slate-800/80 p-6 rounded-xl border border-slate-600 hover:border-amber-500/50 transition-colors shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-white">{course.title}</h3>
                <a 
                  href={course.link_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  Access Course
                </a>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
