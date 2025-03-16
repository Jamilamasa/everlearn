import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Card from "@/Components/ui/card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-5 md:mx-10 lg:mx-28 my-10">
        <div className="md:grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-6">
            <p>You’ve got a new Course!</p>
            <h2 className="font-medium text-2xl">Hello, Learner!</h2>
            <p className="md:text-2xl md:max-w-xl">
              Unleash Your Learning Potential. Personalize Your Path with
              everlearn.
            </p>
            <button className="md:text-lg bg-[#00599B] py-3 md:px-10 px-5 text-white rounded-full">
              Get Started
            </button>
          </div>

          <div className="md:grid grid-cols-2 grid-rows-1 gap-4 hidden">
            <div className="relative lg:h-72 md:h-48">
              <img
                src="/svg/home-1.svg"
                alt="Image 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative lg:h-72 md:h-36">
              <img
                src="/svg/home-2.svg"
                alt="Image 2"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative lg:h-72 md:h-28">
              <img
                src="/svg/home-3.svg"
                alt="Image 3"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="relative">
              <img
                src="/svg/home-4.svg"
                alt="Image 4"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="my-36 md:px-20">
          <h3 className="font-semibold md:text-5xl m-auto flex md:justify-center justify-start text-center">
            Courses
          </h3>
          <div className="flex my-20 flex-col md:flex-row justify-between items-center">
            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:max-w-4xl mx-auto">
              <Card
                imageUrl="/svg/cpp.svg"
                title="C++"
                description="Learn how to use code to develop amazing projects"
              />
              <Card
                imageUrl="/svg/python.svg"
                title="Python"
                description="Learn how to use code to develop amazing projects"
              />
              <Card
                imageUrl="/svg/html.svg"
                title="WEB DESIGN"
                description="Learn how to build amazing websites using basic HTML and CSS"
              />
              <Card
                imageUrl="/svg/react.svg"
                title="REACT"
                description="An advanced learning on how to build amazing projects"
              />
              <Card
                imageUrl="/svg/british.svg"
                title="BRITISH IELTS"
                description="Learn how to read, write, and speak English fluently"
              />
              <Card
                imageUrl="/svg/c-sharp.svg"
                title="C#"
                description="Learn how to use code to develop amazing projects"
              />
            </div>

            <div className="space-y-6 mt-6 md:mt-0 md:ml-10">
              <h3 className="text-5xl ">
                <span className="text-blue-800">Engaging</span> Courses
              </h3>
              <p className="text-xl md:text-2xl">
                A comprehensive library of courses, <br /> curated for your
                success.
              </p>
              <button className="md:text-lg bg-[#00599B] py-3 md:px-10 px-5 text-white rounded-full">
                Get Started
              </button>
            </div>
          </div>
          <div className=" m-auto flex justify-center items-center max-w-4xl">
            <div>
            <h2 className=" text-5xl m-auto text-center justify-center flex my-10">Programs</h2>
            <p className=" text-xl md:text-3xl text-center ">
              Everlearn is a complete coursewave solution that combines expertly
              designed adaptive learning technology with high quality openly
              available content to deliver a personalized learning experience
              that is accessible and improves student outcomes. All of the
              instructional content needed for a course - including text and
              video.
            </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
