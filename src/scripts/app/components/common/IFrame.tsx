import classNames from "classnames";
import * as React from "react";

interface IIFrameProps extends React.HTMLAttributes<HTMLIFrameElement> {
  src: string;
  className?: string;
  iframeClassName?: string;
  loadingElement?: React.ReactElement<any>;
}

const IFrame: React.SFC<IIFrameProps> = ({
  className,
  loadingElement,
  iframeClassName,
  ...iframeProps
}) => {
  let iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [isLoading, setLoading] = React.useState(false);

  const onIframeLoad = () => setLoading(false);

  React.useEffect(() => {
    if (iframeRef != null) {
      const iframe = iframeRef.current as unknown as HTMLIFrameElement;
      setLoading(true);
      iframe.addEventListener("load", onIframeLoad);

      return () => {
        iframe.removeEventListener("load", onIframeLoad);
      };
    }
  }, []);

  return (
    <div className={classNames("iframe", className)}>
      {isLoading && <div className="iframe-loading">{loadingElement}</div>}
      <iframe
        {...iframeProps}
        className={iframeClassName}
        ref={iframeRef}
      />
    </div>
  );
};

export default IFrame;