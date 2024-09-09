import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.action'
import React from 'react'

const Home = async () => {
    const loggedIn = await getLoggedInUser();

    return (
        <section className='home'>
            <div className='home-content'>
                <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.name || 'Guest'}
                    subtext="Access and manage your account and transaction efficiently"
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250}

                />
            </div>
            <RightSidebar user={loggedIn} transections={[]} banks={[{ currentBalance: 123.50 }, {}]} />
        </section>
    )
}

export default Home