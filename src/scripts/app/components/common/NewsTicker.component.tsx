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
  const { message, createdBy, dateCreated  } = news;

  return (
    <div className={"ticker__content"}>
      <div>{message}</div>
      <div className={"ticker__content__author"}>
        Sent by {capitaliseFirst(createdBy as string)}{" "}
        <span className={"ticker__content__author--time"}>
          {dayjs(dateCreated).format("YYYY-MM-DD HH:mm")}
        </span>
      </div>
    </div>
  );
};

const NewsTicker: React.FC<INewsTicker> = () => {
  const [news, setNews] = React.useState<NewsMessage[]>([]);

  const getAndSetNews = () => {
    getLatestNews().then((result) => {
      setNews(result);
    });
  };

  React.useEffect(() => {
    getAndSetNews();
  }, []);

  useInterval(() => {
    getAndSetNews();
  }, minutesToMilliseconds(0.2));

  if (news === undefined || news.length === 0) {
    return null;
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