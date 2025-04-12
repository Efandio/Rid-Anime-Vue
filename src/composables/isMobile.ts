
import { ref } from "vue";
import { onMounted, onUnmounted } from "vue";


export const useIsMobile = () => {
    const isMobile = ref(false)

    const check = () => {
        isMobile.value = window.innerWidth <= 768;
    };

    onMounted(() => {
        check();
        addEventListener('resize', check);
    });

    onUnmounted(() => {
        removeEventListener('resize', check)
    });

    return isMobile;
}