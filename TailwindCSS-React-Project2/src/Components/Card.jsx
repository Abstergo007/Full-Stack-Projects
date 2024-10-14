import React from "react";

function Card({userName="User", userDesignation} ){
    return(
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-48 h-100 rounded-full mx-auto" src="https://images.pexels.com/photos/28842451/pexels-photo-28842451/free-photo-of-black-and-white-portrait-of-person-in-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="1260" height="750"></img>
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “This is for a tailwind test. I will reuse the component from other sources”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              {userName}
            </div>
            <div class="text-slate-700 dark:text-slate-5">
                {userDesignation || "Analyst Trainee"}    
                {/* this works also to add default value to variables */}
              </div>
            </figcaption>
          </div>
      </figure>
    )
}

export default Card  