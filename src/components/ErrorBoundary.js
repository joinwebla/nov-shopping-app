import React from "react";

// HOC
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    // Sentry.report(error);
  }

  render() {
    if (this.state.hasError) return <h1>Something went wrong! We will fix!</h1>;
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
