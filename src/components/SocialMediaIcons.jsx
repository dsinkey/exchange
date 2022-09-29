import React from "react";
import {
  Facebook,
  Reddit as RedditIcon,
  Telegram as TelegramIcon,
  Twitter as TwitterIcon,
} from "@mui/icons-material";
import { Link, IconButton } from "@mui/material";

const SocialMediaIcons = ({
  facebook_url,
  twitter_handle,
  reddit_url,
  telegram_url,
}) => {
  return (
    <div>
      {facebook_url ? (
        <Link href={facebook_url}>
          <IconButton>
            <Facebook sx={{ color: "#4267B2" }} />
          </IconButton>
        </Link>
      ) : null}
      {twitter_handle ? (
        <Link href={`https://twitter.com/${twitter_handle}`}>
          <IconButton>
            <TwitterIcon sx={{ color: "#1DA1F2" }} />
          </IconButton>
        </Link>
      ) : null}
      {reddit_url ? (
        <Link href={reddit_url}>
          <IconButton>
            <RedditIcon sx={{ color: "#FF4500" }} />
          </IconButton>
        </Link>
      ) : null}
      {telegram_url ? (
        <Link href={telegram_url}>
          <IconButton>
            <TelegramIcon sx={{ color: "#229ED9" }} />
          </IconButton>
        </Link>
      ) : null}
    </div>
  );
};

export default SocialMediaIcons;
