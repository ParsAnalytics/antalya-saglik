// app/api/news/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllNews, getNewsByCategory } from '@/lib/newsService';

export const revalidate = 900; // 15 minutes

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || 'all';
    const limit = parseInt(searchParams.get('limit') || '50');

    const news = await getNewsByCategory(category);
    const paginated = news.slice(0, limit);

    return NextResponse.json(
      { success: true, count: paginated.length, data: paginated },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=1800',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Haberler yüklenemedi' },
      { status: 500 }
    );
  }
}
