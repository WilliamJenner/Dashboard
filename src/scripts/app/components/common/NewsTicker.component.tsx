import dayjs from "dayjs";
import React from "react";
import { Row, Table } from "react-bootstrap";
import Ticker from "react-ticker";
import { getLatestAlerts as getLatestNews } from "../../actions/news";
import { NewsMessage } from "../../client/client";
import { useInterval } from "../../hooks/useInterval";
import { minutesToMilliseconds } from "../../utils/number";
import { capitaliseFirst } from "../../utils/string";

interface INewsTicker {}

interface IAlert {
  news: NewsMessage;
}

const NewsMessageBar: React.FC<IAlert> = ({ news }) => {
  const { message, createdBy, publishedAt } = news;

  return (
    <div className={"ticker__content"}>
      <div>{message}</div>
      <div className={"ticker__content__author"}>
        Sent by {capitaliseFirst(createdBy as string)} at{" "}
        {dayjs(publishedAt).format("HH:mm:ss")}
      </div>
    </div>
  );
};

const NewsTicker: React.FC<INewsTicker> = () => {
  const [news, setNews] = React.useState<NewsMessage[]>([]);

  const getAndSetNews = async () => {
    try {
      const result = await getLatestNews();
      setNews(result);
    } catch (Error e) {
      console.log("Error getting news");
    }
  };

  React.useEffect(() => {
    getAndSetNews();
  }, []);

  useInterval(() => {
    getAndSetNews();
    //Rate limit allows 100 per 24 hours
  }, minutesToMilliseconds(144));

  if (news === undefined || news.length === 0) {
    return <p>No news, we probably hit the rate limit...</p>;
  }

  return (
    <div className="ticker">
      <Ticker>
        {({ index }) =>
          news.map((alert) => {
            return <NewsMessageBar news={alert} />;
          })
        }
      </Ticker>
    </div>
  );
};

export default NewsTicker;
