export default function About() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">About RakeshShop</h1>

        <p className="text-lg text-gray-700 mb-6">
          {`Welcome to RakeshShop — your smart assistant for managing grocery shopping and daily expenses with ease.`}
        </p>

        {/* Embed Youtube Video */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Watch Our Introduction Video</h2>
          <iframe
            className="w-full h-64 mt-4"
            src="https://www.youtube.com/embed/yL11WqGvie4?si=_-5sR2Po-SPFJpJH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

        </div>

        <div className="space-y-4 text-gray-600">
          <p>
            {`This website is designed to help you keep track of your everyday purchases. You can add items you buy daily, monitor how much you're spending, and generate monthly product summaries.`}
          </p>

          <p>
            {`With a clean and simple interface, RakeshShop is built to make grocery tracking effortless — whether you're shopping alone or managing a household.`}
          </p>

          <p>
            {`This app is still growing, so stay tuned for more features like expense charts, budget reminders, and export options.`}
          </p>
        </div>
      </div>
    </>

  )
}