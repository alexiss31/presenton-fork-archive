import React from 'react'
import DashboardSidebar from './Components/DashboardSidebar'
import { normalizePresentationGenerationMode } from '@/utils/presentationGenerationMode'
import { isCommunityEnabled } from '@/utils/community'

const layout = ({ children }: { children: React.ReactNode }) => {
    const presentationGenerationMode = normalizePresentationGenerationMode(
        process.env.PRESENTATION_GENERATION_MODE,
    )

    // Deskley's portal frames this dashboard under its own sidebar (DESKLEY_EMBED=true): a second one would repeat it.
    const embedded = process.env.DESKLEY_EMBED === 'true'

    return (
        <div className={embedded ? 'flex bg-white' : 'flex pr-4 bg-white'}>
            {embedded ? null : (
                <DashboardSidebar
                    showCommunity={isCommunityEnabled(process.env.PRESENTON_COMMUNITY_ENABLED)}
                    showTemplates={presentationGenerationMode !== "smart"}
                />
            )}
            <div className='w-full min-w-0'>

                {children}
            </div>
        </div>
    )
}

export default layout
