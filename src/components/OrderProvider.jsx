'use client'

import { createContext, useCallback, useContext, useState } from 'react'
import { OrderModal } from './OrderModal'

const OrderContext = createContext({ openOrder: () => {} })

export function useOrder() {
  return useContext(OrderContext)
}

export function OrderProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [pkg, setPkg] = useState(null)

  const openOrder = useCallback((packageName = null) => {
    setPkg(packageName)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  return (
    <OrderContext.Provider value={{ openOrder }}>
      {children}
      {isOpen && <OrderModal pkg={pkg} onClose={close} />}
    </OrderContext.Provider>
  )
}
