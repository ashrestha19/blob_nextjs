import Image from 'next/image';

export default function Page() {
    return (
    <>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />


        {/* Text Section */}
            <div>
            <h1 className="text-3xl font-bold mb-6">About Us</h1>
                <hr />
              <p className="text-lg text-gray-300 dark:text-gray-700">
                Safalta Services is a recruitment consultancy helping companies to
                connect with high-level talent across Nepal. With an active network
                of a large number of candidates and specialist knowledge of key
                business verticals, we deliver the best talent in the shortest time
                possible and help you fine-tune your recruitment process.
              </p>
              <p className="mt-4 text-lg text-gray-300 dark:text-gray-700">
                We assure high-quality candidates who align with the jobs
                requirements and the companys values with the help of our
                recruitment specialists.
              </p>
            </div>
      </div>
    </>
    );
  }