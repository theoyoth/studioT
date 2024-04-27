import { create } from 'zustand'

type stateProps = {
  indexImageService:number,
  setIndexImageService:(id:number) => void,
  indexImagePortfolio:number,
  setIndexImagePortfolio:(id:number) => void,
}

export const useImageStore = create<stateProps>()((set) => ({
  indexImageService: 1,
  setIndexImageService: (id:number) => set({
    indexImageService : id
  }),
  indexImagePortfolio: 1,
  setIndexImagePortfolio: (id:number) => set({
    indexImagePortfolio : id
  }),
}))