import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Contact Us", "Past Events", "Upcomming Events"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h6"
            className="text-gray-900"
            placeholder=""
          >
            North Karnataka Tennis Association
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                  placeholder=""
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text" placeholder="">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" placeholder="">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" placeholder="">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text" placeholder="">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
          placeholder=""
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://nkta.in" target="_blank">
            North Karnataka Tennis Association
          </a>{" "}
          by{" "}
          <a href="https://sanavi.org" target="_blank">
            Sanavi Technologies
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
