import React from 'react'

function ForgotPasswordPage() {
  return (
    <div>
        <h1>Forgot Password</h1>
        <p>Please enter your email to reset your password</p>
        <form>
            <input type="email" placeholder="Email" />
            <button type="submit">Reset Password</button>
        </form>
    </div>
  )
}

export default ForgotPasswordPage;