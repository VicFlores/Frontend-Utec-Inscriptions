import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { verifyAuth } from '../../utils/verifyAuth'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {

  const url = req.nextUrl.clone()
  url.pathname = '/'
  const token = req.cookies['token']

  if (!token) {
    return NextResponse.rewrite(url)
  }
  
  const result = await verifyAuth(token)
  if (result.message){
    
    return NextResponse.rewrite(url)
  }
  return NextResponse.next()
}