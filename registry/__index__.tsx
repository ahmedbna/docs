import { accordionRegistry } from './registry/accordion';
import { actionSheetRegistry } from './registry/action-sheet';
import { alertRegistry } from './registry/alert';
import { audioPlayerRegistry } from './registry/audio-player';
import { audioRecorderRegistry } from './registry/audio-recorder';
import { audioWaveformRegistry } from './registry/audio-waveform';
import { avatarRegistry } from './registry/avatar';
import { badgeRegistry } from './registry/badge';
import { bottomSheetRegistry } from './registry/bottom-sheet';
import { buttonRegistry } from './registry/button';
import { cameraPreviewRegistry } from './registry/camera-preview';
import { cameraRegistry } from './registry/camera';
import { cardRegistry } from './registry/card';
import { carouselRegistry } from './registry/carousel';
import { checkboxRegistry } from './registry/checkbox';
import { collapsibleRegistry } from './registry/collapsible';
import { colorPickerRegistry } from './registry/color-picker';
import { comboboxRegistry } from './registry/combobox';
import { datePickerRegistry } from './registry/date-picker';
import { filePickerRegistry } from './registry/file-picker';
import { galleryRegistry } from './registry/gallery';
import { helloWaveRegistry } from './registry/hello-wave';
import { iconRegistry } from './registry/icon';
import { imageRegistry } from './registry/image';
import { inputOtpRegistry } from './registry/input-otp';
import { linkRegistry } from './registry/link';
import { mediaPickerRegistry } from './registry/media-picker';
import { modeToggleRegistry } from './registry/mode-toggle';
import { onboardingRegistry } from './registry/onboarding';
import { parallaxScrollViewRegistry } from './registry/parallax-scrollview';
import { pickerRegistry } from './registry/picker';
import { popoverRegistry } from './registry/popover';
import { progressRegistry } from './registry/progress';
import { radioRegistry } from './registry/radio';
import { scrollViewRegistry } from './registry/scroll-view';
import { searchbarRegistry } from './registry/searchbar';
import { shareRegistry } from './registry/share';
import { sheetRegistry } from './registry/sheet';
import { skeletonRegistry } from './registry/skeleton';
import { spinnerRegistry } from './registry/spinner';
import { switchRegistry } from './registry/switch';
import { tableRegistry } from './registry/table';
import { tabsRegistry } from './registry/tabs';
import { textRegistry } from './registry/text';
import { toastRegistry } from './registry/toast';
import { toggleRegistry } from './registry/toggle';
import { videoRegistry } from './registry/video';
import { viewRegistry } from './registry/view';

export const Index: Record<string, any> = {
  index: {
    name: 'index',
    description: '',
    type: 'registry:style',
    registryDependencies: ['utils'],
    files: [],
    component: null,
    categories: undefined,
    meta: undefined,
  },
  ...accordionRegistry,
  ...actionSheetRegistry,
  ...alertRegistry,
  ...audioPlayerRegistry,
  ...audioRecorderRegistry,
  ...audioWaveformRegistry,
  ...avatarRegistry,
  ...badgeRegistry,
  ...bottomSheetRegistry,
  ...buttonRegistry,
  ...cameraPreviewRegistry,
  ...cameraRegistry,
  ...cardRegistry,
  ...carouselRegistry,
  ...checkboxRegistry,
  ...collapsibleRegistry,
  ...colorPickerRegistry,
  ...comboboxRegistry,
  ...datePickerRegistry,
  ...filePickerRegistry,
  ...galleryRegistry,
  ...helloWaveRegistry,
  ...iconRegistry,
  ...imageRegistry,
  ...inputOtpRegistry,
  ...linkRegistry,
  ...mediaPickerRegistry,
  ...modeToggleRegistry,
  ...onboardingRegistry,
  ...parallaxScrollViewRegistry,
  ...pickerRegistry,
  ...popoverRegistry,
  ...progressRegistry,
  ...radioRegistry,
  ...scrollViewRegistry,
  ...searchbarRegistry,
  ...shareRegistry,
  ...sheetRegistry,
  ...skeletonRegistry,
  ...spinnerRegistry,
  ...switchRegistry,
  ...tableRegistry,
  ...tabsRegistry,
  ...textRegistry,
  ...toastRegistry,
  ...toggleRegistry,
  ...videoRegistry,
  ...viewRegistry,
};
