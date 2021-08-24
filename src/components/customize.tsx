import React, { Children } from 'react'
import { formatMessage } from '../intl/format'

interface Props {
  customizeLabel?: string
  confirmButtonLabel?: string
  onConfirmButtonClick?: () => void
  shouldDisplay: boolean
  children: React.ReactNode
}

const Customize: React.FC<Props> = ({
  customizeLabel,
  confirmButtonLabel,
  onConfirmButtonClick,
  shouldDisplay,
  children,
}) => (
  <div
    className={`react-cookienotice-customize${shouldDisplay ? '' : '-hidden'}`}
  >
    <span className='react-cookienotice-customize-label'>
      {formatMessage('customize.label', customizeLabel)}
    </span>
    <div className='react-cookienotice-services'>
      {Children.map(children, (child) => (
        <div className='react-cookienotice-service'>{child}</div>
      ))}
    </div>
    <button onClick={onConfirmButtonClick}>
      {formatMessage('customize.confirmButtonLabel', confirmButtonLabel)}
    </button>
  </div>
)

export default Customize
