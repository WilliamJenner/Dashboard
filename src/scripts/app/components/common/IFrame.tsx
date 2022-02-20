import classNames from "classnames";
import * as React from "react";

interface IIFrameProps extends React.HTMLAttributes<HTMLIFrameElement> {
  src: string;
  className?: string;
  iframeClassName?: string;
  loadingElement?: React.ReactElement<any>;
  useLoadingWrapper: boolean;
}

const IFrame: React.SFC<IIFrameProps> = ({
  className,
  loadingElement,
  iframeClassName,
  useLoadingWrapper,
  ...iframeProps
}) => {
  let iframeRef = React.useRef<HTMLIFrameElement>(null);
  const [isLoading, setLoading] = React.useState(false);

  const onIframeLoad = () => setLoading(false);

  if (useLoadingWrapper) {
    React.useEffect(() => {
      if (iframeRef != null && iframeRef.current) {
        const iframe = iframeRef.current as HTMLIFrameElement;
        setLoading(true);
        iframe.addEventListener("load", onIframeLoad);

        return () => {
          iframe.removeEventListener("load", onIframeLoad);
        };
      }
    }, []);
  }

  return (
    <div className={classNames("iframe", className)}>
      {isLoading ? (
        loadingElement
      ) : (
        <iframe {...iframeProps} className={iframeClassName} ref={iframeRef} />
      )}
    </div>
  );
};

export default IFrame;
