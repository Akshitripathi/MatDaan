import React from 'react';
import './UserGuide.css';

const UserGuide = () => {
  return (
    <div className="user-guide-container">
      <h1>Online Voting User Guide</h1>
      <section className="guide-section">
        <h2>Step 1: Registering for an Account</h2>
        <p>
          To vote online, you first need to create an account. Follow these steps:
        </p>
        <ul>
          <li>Click the "Register" button on the homepage.</li>
          <li>Enter your personal details (name, email, contact number).</li>
          <li>Create a secure password.</li>
          <li>Once completed, click "Submit" and check your email for a confirmation link.</li>
          <li>Click the confirmation link to verify your account.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Step 2: Logging In</h2>
        <p>
          After registering, you can log in to cast your vote:
        </p>
        <ul>
          <li>On the homepage, click "Login."</li>
          <li>Enter your email and password.</li>
          <li>Click "Submit" to access your account.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Step 3: Casting Your Vote</h2>
        <p>
          Once logged in, you’re ready to vote:
        </p>
        <ul>
          <li>On the dashboard, click "Vote Now."</li>
          <li>Select your preferred candidate from the list of options.</li>
          <li>Review your choice carefully.</li>
          <li>Click "Submit Vote" to cast your vote.</li>
          <li>You will see a confirmation message when your vote is successfully submitted.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Step 4: Verifying Your Vote</h2>
        <p>
          You can verify that your vote was counted:
        </p>
        <ul>
          <li>After submitting your vote, navigate to the "Vote History" section in your account.</li>
          <li>Check the status of your vote (should display "Submitted").</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Having Trouble?</h2>
        <p>If you're facing issues with any step, here are some tips:</p>
        <ul>
          <li>Make sure your internet connection is stable.</li>
          <li>Refresh the page if it takes too long to load.</li>
          <li>If you forget your password, click "Forgot Password" to reset it.</li>
          <li>Contact our support team using the "Help" option if you're still facing difficulties.</li>
        </ul>
      </section>
    </div>
  );
};

export default UserGuide;
