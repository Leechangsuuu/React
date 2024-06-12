import React from 'react'

export default function Logout() {
    const Logout = ({user,onLogout})=>{
        
    }
  return (
    <section className='py-20'>
        <div className="container">
            <div classname = "flex flex-wrap mx-4">
                <div className='max-w-[525px] mx-auto text-center'>
                    <form>
                    <div className='w-full rounded-md'>
                        {user}님 반갑습니다.
                    </div>
                    <div className='mb-10'>
                        <input 
                            type = "button"
                            value="Sign out"
                            className='w-full rounded-md'
                            onClick={onLogout}
                            />
                    </div>
                    </form>
                </div>
            </div>

        </div>
    </section>

  )
}
