import React, { useState } from 'react';

interface LoginViewProps {
  onLogin: (email: string, pass: string) => void;
  language: 'en' | 'ne';
  t: (key: string) => string;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin, language, t }) => {
  const [email, setEmail] = useState('admin@civic.gov.np');
  const [password, setPassword] = useState('password');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-xl">
        <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
                <i className="fa-solid fa-city text-sky-600 text-4xl"></i>
                <h1 className="text-3xl font-bold text-slate-800">CivicConnect Nepal</h1>
            </div>
            <p className="text-slate-500">{t('loginToYourAccount')}</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">{t('emailAddress')}</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-t-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder={t('emailAddress')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              {/* FIX: Added sr-only to hide label visually for UI consistency with the email field. */}
              <label htmlFor="password" className="sr-only">{t('password')}</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-b-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 focus:z-10 sm:text-sm"
                placeholder={t('password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              {t('login')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;