import axios from "axios";
import { useContext, useState } from "react";
import Swal from './../../node_modules/sweetalert2/src/sweetalert2';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/Provider";
const AddJobs = () => {
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate()
  const {user }  = useContext(AuthContext);

  const handleAddJob = async (e) => {
    e.preventDefault();
    setSubmitting(true);

  
    const form = e.target;
    const formData = new FormData(form);

    const newJob = {
      title: formData.get("title"),
      location: formData.get("location"),
      jobType: formData.get("jobType"),
      category: formData.get("category"),
      applicationDeadline: formData.get("applicationDeadline"),
      salaryRange: {
        min: parseFloat(formData.get("minSalary")),
        max: parseFloat(formData.get("maxSalary")),
        currency: "bdt"
      },
      description: formData.get("description"),
      company: formData.get("company"),
      requirements: formData.get("requirements").split('\n').filter(item => item.trim()),
      responsibilities: formData.get("responsibilities").split('\n').filter(item => item.trim()),
      status: "active",
      hr_email: formData.get("hr_email"),
      hr_name: formData.get("hr_name"),
      company_logo: formData.get("company_logo")
    };

    console.log("Posting job:", newJob);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jobs`, newJob);

      console.log("Job posted:", data);

      if (!data.success) {
        Swal.fire({
          title: "Success!",
          text: "Job posted successfully!",
          icon: "success",
          draggable: true
        });
      }
      navigate("/all-jobs");
      form.reset();
      // Reset form after successful submission
    } catch (error) {
      console.error("Error posting job:", error.message);
      alert("Failed to post job. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-white/40">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Post a New Job Opportunity</h1>
          <p className="text-gray-600">Fill out the form below to list your job opening</p>
        </div>

        <form onSubmit={handleAddJob} className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {/* Job Title */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Job Title*</label>
            <input
              type="text"
              name="title"
              required
              placeholder="e.g. Senior React Developer"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Company Name*</label>
            <input
              type="text"
              name="company"
              required
              placeholder="e.g. Tech Solutions Inc."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Location*</label>
            <input
              type="text"
              name="location"
              required
              placeholder="e.g. Dhaka, Bangladesh"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Job Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Job Type*</label>
            <select
              name="jobType"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option disabled value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Freelance">Freelance</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Category*</label>
            <select
              name="category"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            >
              <option disabled value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

          {/* Application Deadline */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Application Deadline*</label>
            <input
              type="date"
              name="applicationDeadline"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Salary Range */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Salary Range (BDT)*</label>
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="number"
                  name="minSalary"
                  required
                  placeholder="Min"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  name="maxSalary"
                  required
                  placeholder="Max"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            </div>
          </div>

          {/* Company Logo */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Company Logo</label>
            <input
              type="text"
              name="company_logo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* HR Contact */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">HR Contact Name*</label>
            <input
              type="text"
              name="hr_name"
              disabled
              defaultValue={user?.displayName || ''}
              required
              placeholder="HR Manager Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* HR Email */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">HR Email*</label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user?.email}
              disabled
              required
              placeholder="hr@company.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Job Description */}
          <div className="md:col-span-2 space-y-2">
            <label className="block text-sm font-medium text-gray-700">Job Description*</label>
            <textarea
              name="description"
              required
              rows={4}
              placeholder="Detailed job description..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            ></textarea>
          </div>

          {/* Requirements */}
          <div className="md:col-span-2 space-y-2">
            <label className="block text-sm font-medium text-gray-700">Requirements* (one per line)</label>
            <textarea
              name="requirements"
              required
              rows={4}
              placeholder="- Bachelor's degree in Computer Science\n- 3+ years of experience..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            ></textarea>
          </div>

          {/* Responsibilities */}
          <div className="md:col-span-2 space-y-2">
            <label className="block text-sm font-medium text-gray-700">Responsibilities* (one per line)</label>
            <textarea
              name="responsibilities"
              required
              rows={4}
              placeholder="- Develop and maintain web applications\n- Collaborate with team members..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Posting Job...
                </>
              ) : "Post Job"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJobs;