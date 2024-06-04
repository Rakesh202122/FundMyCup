import React from 'react'

const About = () => {
  return (
    <div>
        <main class="container mx-auto p-4">
        <section class="bg-gray-600 p-8 shadow-md rounded-lg">
            <h1 class="text-3xl font-bold text-gray-100 mb-4">About FundMyCup</h1>
            <p class="text-gray-100 mb-6">Welcome to FundMyCup, a platform dedicated to helping you fund your dreams. Whether you’re looking to start a small business, support a community project, or pursue a personal passion, FundMyCup is here to help you make it happen.</p>
            <h2 class="text-2xl font-semibold text-gray-100 mb-4">Our Mission</h2>
            <p class="text-gray-100 mb-6">Our mission is to empower individuals and communities by providing a platform that makes fundraising accessible, straightforward, and successful.</p>
            <h2 class="text-2xl font-semibold text-gray-100 mb-4">Our Story</h2>
            <p class="text-gray-100 mb-6">Founded in 2024, FundMyCup was born out of the need to bridge the gap between great ideas and the resources needed to bring them to life. Our founders, Jane Doe and John Smith, saw the potential for a platform that not only supports fundraising but also fosters a supportive community of backers and creators.</p>
            <h2 class="text-2xl font-semibold text-gray-100 mb-4">Why Choose Us?</h2>
            <ul class="list-disc list-inside text-gray-100 mb-6">
                <li class="mb-2">Easy to Use: Our platform is designed to be user-friendly and intuitive.</li>
                <li class="mb-2">Secure: We prioritize your security with robust encryption and secure payment processing.</li>
                <li class="mb-2">Supportive Community: Join a network of like-minded individuals who are eager to support your journey.</li>
            </ul>
            <p class="text-gray-100">Join us at FundMyCup and turn your ideas into reality!</p>
        </section>
    </main>
    </div>
  )
}

export default About

// either static metadata
export const metadata = {
    title: "About - Get Me A Chai"
}