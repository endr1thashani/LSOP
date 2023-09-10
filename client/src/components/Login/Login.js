import React from 'react'

const Login = () => {
  return (
    <div>
        <form>

            <div>
                <label htmlFor='email'>Email :</label>
                <input type='email' name='email' />
            </div>

            <div>
                <label htmlFor='password'>Password :</label>
                <input type='password' name='password' />
            </div>

        </form>
    </div>
  )
}

export default Login