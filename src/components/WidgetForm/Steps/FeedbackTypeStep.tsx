import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'

export interface FeedbackTypeProps {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void
}

export const FeedbackTypeStep = ({
  onFeedbackTypeChanged
}: FeedbackTypeProps) => {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className='bg-zinc-800 rounded-lg w-24 py-5 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type='button'>
              <img src={value.image.src} alt={value.image.alt} />
              <span className=''>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}
