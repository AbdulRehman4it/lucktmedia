import React from "react";

// images import
import social1 from "../assets/social1.webp";
import social2 from "../assets/social2.webp";
import social3 from "../assets/social3.webp";
import social4 from "../assets/social4.webp";
import social5 from "../assets/social5.webp";
import social6 from "../assets/social6.webp";
import social7 from "../assets/social7.webp";

const PostsSection: React.FC = () => {
  return (
    <section className="xl:pt-24 pt-12 px-6">
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 2xl:gap-10">
        <a
          href="https://www.facebook.com/watch/?v=405294525335835"
          target="_blank"
          rel=""
        >
          <img
            src={social1}
            alt="post-1"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid"
          />
        </a>

        <a
          href="https://www.facebook.com/photo.php?fbid=974342778030781&set=a.173225041475896&type=3&ref=embed_post"
          target="_blank"
          rel=""
        >
          <img
            src={social2}
            alt="post-2"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid"
          />
        </a>

        <a
          href="https://www.facebook.com/grzegorz.michal.braun/videos/1779157145917907"
          target="_blank"
          rel=""
        >
          <img
            src={social3}
            alt="post-3"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid"
          />
        </a>

        <a
          href="https://www.facebook.com/photo.php?fbid=987443179407340&set=a.329001718584826&type=3&ref=embed_post"
          target="_blank"
          rel=""
        >
          <img
            src={social4}
            alt="post-4"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid"
          />
        </a>

        <a
          href="https://www.facebook.com/photo.php?fbid=1046228660403382&set=a.314970213529234&type=3&ref=embed_post"
          target="_blank"
          rel=""
        >
          <img
            src={social5}
            alt="post-5"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid"
          />
        </a>

        <a
          href="https://www.facebook.com/photo.php?fbid=1025671582897900&set=a.173225041475896&type=3&ref=embed_post"
          target="_blank"
          rel=""
        >
          <img
            src={social6}
            alt="post-6"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid"
          />
        </a>

        <a
          href="https://www.facebook.com/photo.php?fbid=1000088314809493&set=a.329001731918158&type=3&ref=embed_post"
          target="_blank"
          rel=""
        >
          <img
            src={social7}
            alt="post-7"
            className="mb-6 2xl:mb-10 w-full rounded-lg break-inside-avoid"
          />
        </a>
      </div>
    </section>
  );
};

export default PostsSection;
