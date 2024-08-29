'use client';

import BookingDescriptionSection from '@/components/booking/booking-description-section';
import BookingMealTypeSection from '@/components/booking/booking-meal-type-section';
import BookingMetadataSection from '@/components/booking/booking-metadata-section';
import BookingRoomTypeSection from '@/components/booking/booking-room-type-section';
import BookingSummary from '@/components/booking/booking-summary';
import { MEAL_TYPE_SEARCH_PARAM_KEY, ROOM_TYPE_SEARCH_PARAM_KEY } from '@/constants/booking';
import { getBooking } from '@/fetches/booking';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import clsx from 'clsx';
import { kebabCase, uniq } from 'lodash-es';

export default async function Page({ searchParams }: { searchParams: Record<string, string> }) {
  return <DocViewer pluginRenderers={DocViewerRenderers} documents={[{ uri: '/sample.doc' }]} />;
}
