import Link from 'next/link';
import './globals.css';
import Image from 'next/image';

const AppPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg sticky top-0 z-50 transition-shadow duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 space-x-4">
            {/* Logo - luôn hiển thị */}
            <div className="w-1/4 md:1/2">
              <Link href="/" className="text-xl font-bold">
                <div className="flex items-center space-x-2">
                  <Image src="/favicon.ico" alt="" width="50" height="50" />
                  <div className="text-blue-400 text-xl">Healthcare</div>
                </div>
              </Link>
            </div>
            {/* Menu items - ẩn trên mobile, hiện từ lg trở lên */}
            <div className="hidden lg:block w-1/2">
              <div className="flex justify-evenly items-center space-x-16">
                <div>
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="hover:text-blue-500 text-gray-500 font-semibold text-base">
                      Services
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-white shadow-lg shadow-slate-400 rounded-box z-[1] w-[400px] p-4 mt-4">
                      <li className="hover:text-blue-500 text-gray-500 font-semibold text-sm">
                        <a>Online Consultations</a>
                      </li>
                      <li className="hover:text-blue-500 text-gray-500 font-semibold text-sm">
                        <a>Chatting With AI</a>
                      </li>
                      <li className="text-neutral-400 text-xs py-2 font-bold">Medical Services</li>
                      <li className="hover:text-blue-500 text-gray-500 font-semibold text-sm">
                        <a>Prescriptions</a>
                      </li>
                      <li className="hover:text-blue-500 text-gray-500 font-semibold text-sm">
                        <a>Medical Notes</a>
                      </li>
                      <li className="hover:text-blue-500 text-gray-500 font-semibold text-sm">
                        <a>Medicine Refills</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <Link
                  href="/"
                  className="hover:text-blue-500 text-gray-500 font-semibold text-base">
                  About Us
                </Link>
                <Link
                  href="/"
                  className="hover:text-blue-500 text-gray-500 font-semibold text-base">
                  Blogs
                </Link>
                <Link
                  href="/"
                  className="hover:text-blue-500 text-gray-500 font-semibold text-base">
                  Contact Us
                </Link>
              </div>
            </div>
            {/* Chat button - điều chỉnh width dựa trên viewport */}
            <div className="flex-1 lg:w-1/2 flex justify-end">
              <Link
                href="/sign-up"
                className="px-4 py-1.5 flex justify-center items-center rounded-3xl bg-blue-400 hover:bg-blue-500 space-x-2">
                <div className="text-white text-base font-medium">Chat With Assistant</div>
                <div className="bg-white rounded-full p-1">
                  <Image
                    src="https://img.icons8.com/?size=100&id=GzN4ltD52jcA&format=png&color=000000"
                    alt=""
                    width="30"
                    height="30"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-500">
              Your <span className="text-blue-400">trusted partner</span>
              <br />
              in digital healthcare.
            </h1>

            <p className="text-gray-600">
              <span className="text-blue-500 font-semibold">
                Empowering Your Health at Every Step.
              </span>{' '}
              Experience personalized medical care from the comfort of your home. Connect with{' '}
              <span className="text-blue-500">certified doctors</span>, or manage prescriptions, and
              schedule appointments with ease. Ready to take control of your health?{' '}
              <span className="text-blue-500">Get Started</span> or Meet an Assistant today.
            </p>

            <button className="bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors">
              Chat now →
            </button>

            <div className="pt-8">
              <p className="text-gray-500 mb-4">Trusted by millions across the globe:</p>
              <div className="flex items-center gap-6">
                <Image
                  src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
                  alt="Amazon"
                  width={30}
                  height={30}
                  className="grayscale hover:grayscale-0"
                />
                <Image
                  src="https://img.icons8.com/?size=100&id=uoRwwh0lz3Jp&format=png&color=000000"
                  alt="Apple"
                  width={30}
                  height={30}
                  className="grayscale hover:grayscale-0"
                />
                <Image
                  src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                  alt="Google"
                  width={30}
                  height={30}
                  className="grayscale hover:grayscale-0"
                />
                <Image
                  src="https://img.icons8.com/?size=100&id=wue74HqaylSJ&format=png&color=000000"
                  alt="Notion"
                  width={30}
                  height={30}
                  className="grayscale hover:grayscale-0"
                />
                <Image
                  src="https://img.icons8.com/?size=100&id=G9XXzb9XaEKX&format=png&color=000000"
                  alt="Spotify"
                  width={30}
                  height={30}
                  className="grayscale hover:grayscale-0"
                />
                <Image
                  src="https://img.icons8.com/?size=100&id=kikR2jIn6485&format=png&color=000000"
                  alt="Slack"
                  width={30}
                  height={30}
                  className="grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <Image
                src="https://img.icons8.com/?size=100&id=qylxEibRZXk8&format=png&color=000000"
                alt="Doctor"
                width={500}
                height={500}
                className="rounded-full bg-blue-100"
              />

              {/* Rating Card */}
              <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="font-bold">2400+</span>
                </div>
                <p className="font-semibold">Happy Customers</p>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                  <span className="text-gray-600 ml-1">(4.7 Stars)</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, ligula ego consectetuer adipiscing elit doloras.
                </p>
              </div>

              {/* Easy Appointment Badge */}
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="text-blue-500">★</span>
                  Easy to know your health statistics
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-500">
            Easily receive advices from our assistant in 3 simple steps.
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-slate-100"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">Contact Number</label>
              <input
                type="tel"
                placeholder="Enter your contact number"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-slate-100"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-600 mb-2">Your Name</label>
              <input
                type="email"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none bg-slate-100"
              />
            </div>
            <button className="bg-blue-400 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors self-end">
              Receive Now →
            </button>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-500">
              Top <span className="text-blue-400">services</span> we offer
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              In today is fast-paced world, your health deserves the utmost attention and
              convenience. That is why HealNet offers a suite of integrated services designed to
              cater to your healthcare needs digitally.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Online Consultations */}
            <div className="relative p-6 bg-white rounded-2xl shadow-sm border">
              <div className="absolute -left-4 -top-4">
                <Image
                  src="https://img.icons8.com/?size=100&id=jkaEL4Ay3mGV&format=png&color=000000"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Online Consultations</h3>
              <p className="text-gray-600">
                Consult with top doctors across various specialties via video or chat communication.
                It is totally secure, private, and convenient. Choose the best time for an in-person
                visit with our easy-to-use scheduling system, or proceed with our online
                consultation.
              </p>
            </div>

            {/* Chatting with AI */}
            <div className="relative p-6 bg-white rounded-2xl shadow-sm border">
              <div className="absolute -left-4 -top-4">
                <Image
                  src="https://img.icons8.com/?size=100&id=62giybpMlD07&format=png&color=000000"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Chatting with AI</h3>
              <p className="text-gray-600">
                Instantly connect with our AI assistant to get answers, book services, and receive
                real-time health advice—all at your fingertips.
              </p>
            </div>

            {/* Prescriptions */}
            <div className="relative p-6 bg-white rounded-2xl shadow-sm border">
              <div className="absolute -left-4 -top-4">
                <Image
                  src="https://img.icons8.com/?size=100&id=DNzhylvAeUk8&format=png&color=000000"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Prescriptions</h3>
              <p className="text-gray-600">
                Receive and renew prescriptions digitally after your consultation with our
                specialists.
              </p>
            </div>

            {/* Medical Notes */}
            <div className="relative p-6 bg-white rounded-2xl shadow-sm border">
              <div className="absolute -left-4 -top-4">
                <Image
                  src="https://img.icons8.com/?size=100&id=alIcuZZ5oF3H&format=png&color=000000"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Medical Notes</h3>
              <p className="text-gray-600">
                Obtain necessary medical notes for work or school with only a few clicks of hassle.
              </p>
            </div>

            {/* Medicine Refills (Additional card shown in the corner of the image) */}
            <div className="relative p-6 bg-white rounded-2xl shadow-sm border md:col-start-2 md:row-start-2">
              <div className="absolute -left-4 -top-4">
                <Image
                  src="https://img.icons8.com/?size=100&id=Q76RWlwWr69N&format=png&color=000000"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Medicine Refills</h3>
              <p className="text-gray-600">
                Skip the pharmacy queues and save time + energy by ordering medicine refills online.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-0 top-1/4">
            <svg className="text-blue-100" width="100" height="100" viewBox="0 0 100 100">
              <path
                d="M0,50 Q25,25 50,50 T100,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M0,60 Q25,35 50,60 T100,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M0,70 Q25,45 50,70 T100,70"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Decorative Elements */}
          <div className="absolute right-0 top-1/2">
            <svg className="text-blue-100" width="100" height="100" viewBox="0 0 100 100">
              <path
                d="M0,50 Q25,25 50,50 T100,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M0,60 Q25,35 50,60 T100,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M0,70 Q25,45 50,70 T100,70"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Story Section */}
          <div className="bg-white p-8 rounded-lg border border-blue-100 mb-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="https://img.icons8.com/?size=100&id=23332&format=png&color=000000"
                  alt="Medical Team"
                  width={600}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold text-gray-500">
                  <span className="text-blue-500">Healthcare</span> Story: Get to know us
                </h2>
                <p className="text-gray-600">
                  Healthcare moves lives on online medical services. It is movement towards
                  accessible, efficient, and compassionate healthcare for all. Founded by a team of
                  visionary doctors, healthcare professionals, and technology experts, we are driven
                  by the mission to deliver exceptional medical care directly to you, no matter
                  where you are. Our platform is built on the pillars of trust, expertise, and
                  patient-centric services, ensuring that every interaction is personalized and
                  every treatment plan is tailored to your unique needs. With a network of licensed
                  practitioners from diverse medical fields, we guarantee comprehensive care tha is
                  just a click away.
                </p>
                <button className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-blue-500">
                  Learn more about us
                </button>
              </div>
            </div>
          </div>

          {/* How Platform Works Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-500">
              How <span className="text-blue-400">our platform</span> works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Navigating your healthcare journey with Heathcare is seamless. Just follow these steps
              mentioned below to proceed with your selected services. You can also see our FAQ
              section for more guidance.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 space-y-8">
              {/* Steps */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-500">Create Your Profile</h3>
                  <p className="text-gray-600">
                    Sign up and fill in your medical history properly. Setting up your profile this
                    way would ensure that specialists have your accurate medical progress.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-500">Choose Your Service</h3>
                  <p className="text-gray-600">
                    Select from our range of services and book a consultation. Booking a
                    consultation with HealNet is fairly simple and straight-forward.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-500">Meet Your Doctor</h3>
                  <p className="text-gray-600">
                    Have a virtual consultation with one of our certified specialists, or go for a
                    physical visit to the doctor in case you opted for a physical meet-up.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <Image
                src="https://img.icons8.com/?size=100&id=tgkVMR2ZDo0Z&format=png&color=000000"
                alt="Doctor Consultation"
                width={400}
                height={400}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="text-blue-500">★</span>
                  Best Certified Team of Specialists
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-blue-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image src="/favicon.ico" alt="HealNet Logo" width={40} height={40} />
                <span className="text-2xl font-bold text-blue-500">Healthcare</span>
              </div>
              <p className="text-gray-600 text-sm">
                Experience personalized medical <br />
                care from the comfort of your home.
              </p>
            </div>

            {/* Support links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/getting-started"
                    className="text-gray-600 hover:text-blue-500 text-sm">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-gray-600 hover:text-blue-500 text-sm">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/help-articles" className="text-gray-600 hover:text-blue-500 text-sm">
                    Help Articles
                  </Link>
                </li>
                <li>
                  <Link href="/report-issue" className="text-gray-600 hover:text-blue-500 text-sm">
                    Report an Issue
                  </Link>
                </li>
                <li>
                  <Link href="/contact-help" className="text-gray-600 hover:text-blue-500 text-sm">
                    Contact Help Desk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/booking" className="text-gray-600 hover:text-blue-500 text-sm">
                    Chatting with AI
                  </Link>
                </li>
                <li>
                  <Link href="/consultations" className="text-gray-600 hover:text-blue-500 text-sm">
                    Online consultations
                  </Link>
                </li>
                <li>
                  <Link href="/prescriptions" className="text-gray-600 hover:text-blue-500 text-sm">
                    Prescriptions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/medicine-refills"
                    className="text-gray-600 hover:text-blue-500 text-sm">
                    Medicine Refills
                  </Link>
                </li>
                <li>
                  <Link href="/medical-notes" className="text-gray-600 hover:text-blue-500 text-sm">
                    Medical Notes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-blue-500 text-sm">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-blue-500 text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-notice" className="text-gray-600 hover:text-blue-500 text-sm">
                    Cookie Notice
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-preferences"
                    className="text-gray-600 hover:text-blue-500 text-sm">
                    Cookie Preferences
                  </Link>
                </li>
                <li>
                  <Link href="/trust-center" className="text-gray-600 hover:text-blue-500 text-sm">
                    Trust Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section with social links and copyright */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Social links */}
              <div className="flex space-x-4 mb-4 md:mb-0">
                <Link href="https://facebook.com" className="text-gray-400 hover:text-blue-500">
                  <Image
                    src="https://img.icons8.com/?size=100&id=118466&format=png&color=000000"
                    width="24"
                    height="24"
                    alt=""
                  />
                </Link>
                <Link href="https://instagram.com" className="text-gray-400 hover:text-blue-500">
                  <Image
                    src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000"
                    width="24"
                    height="24"
                    alt=""
                  />
                </Link>
                <Link href="https://linkedin.com" className="text-gray-400 hover:text-blue-500">
                  <Image
                    src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000"
                    width="24"
                    height="24"
                    alt=""
                  />
                </Link>
                <Link href="https://youtube.com" className="text-gray-400 hover:text-blue-500">
                  <Image
                    src="https://img.icons8.com/?size=100&id=98960&format=png&color=000000"
                    width="24"
                    height="24"
                    alt=""
                  />
                </Link>
              </div>

              {/* Copyright text */}
              <div className="text-gray-400 text-sm">Healthcare 2025 © All Rights Reserved</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppPage;
