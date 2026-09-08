import React, { Component } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

/**
 * Production-Ready React Error Boundary
 * Catches runtime exceptions and prevents full app white screens
 */
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // In production, send to telemetry/logging service (e.g., Sentry)
    console.error('ErrorBoundary caught an application error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#020617] text-white selection:bg-blue-500/25 selection:text-cyan-400">
          <div className="max-w-xl w-full rounded-2xl border border-white/10 bg-[#0F172A]/90 backdrop-blur-2xl p-8 sm:p-10 shadow-2xl text-center relative overflow-hidden">
            {/* Background Ambient Blur */}
            <div className="absolute -top-20 -left-20 h-48 w-48 rounded-full bg-rose-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

            {/* Error Monogram Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-400 shadow-glow-primary mb-6">
              <AlertTriangle className="h-8 w-8" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
              Application Exception Caught
            </h1>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              An unexpected runtime error occurred in this view. The rest of the platform remains safe. You can reload the state or return to the main showcase.
            </p>

            {process.env.NODE_ENV !== 'production' && this.state.error && (
              <div className="text-left bg-black/50 border border-white/10 rounded-xl p-4 mb-6 overflow-x-auto max-h-40 text-xs font-mono text-rose-300">
                <p className="font-bold mb-1">{this.state.error.toString()}</p>
                {this.state.errorInfo?.componentStack && (
                  <pre className="text-[10px] text-slate-400 whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                variant="glow"
                onClick={this.handleReload}
                leftIcon={RefreshCw}
                className="h-11 px-6 rounded-xl"
              >
                Reload Experience
              </Button>
              <Button
                variant="outline"
                onClick={this.handleReset}
                leftIcon={Home}
                className="h-11 px-6 rounded-xl"
              >
                Return to Architecture
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
