<template>
    <ComponentLayout title="CSS Grid Columns" class="my-20">
        <div class="row">
            <div class="col first">some text here</div>
            <div class="col second">some text here</div>
            <div class="col third">some text here</div>
            <div class="col forth">some text here</div>
            <div class="col fifth">some text here</div>
            <div class="col sixth">some text here</div>
            <div class="col seventh">i am no 7</div>
            <div class="col eighth">i am no 8</div>
            <div class="col ninth">some text here</div>
            <div class="col tenth">some text here</div>
        </div>
    </ComponentLayout>
</template>

<script setup>
import ComponentLayout from '@/components/ComponentLayout.vue';
</script>

<style scoped>
.row {
    display: grid;
    gap: 0.8rem 0.5rem;
}

.col {
    min-height: 5rem;
    background-color: dimgrey;

    display: grid;
    justify-content: center;
    align-items: center;
}

@media (min-width: 768px) {
    .row {
        grid-template-columns: repeat(8, 1fr);
    }

    .first {
        grid-column: span 3;
    }

    .second {
        grid-column: span 5;
    }

    .third {
        grid-column: span 5;
    }

    .forth {
        grid-column: span 3;
    }

    .fifth {
        grid-column: span 4;
    }

    .sixth {
        grid-column: span 4;
    }

    .seventh {
        grid-column: span 4;
        grid-row-start: 4;
        grid-row-end: 6;
    }

    .eighth {
        grid-column-start: 5;
        grid-column-end: span 4;
        grid-row: 4 / 5;
    }

    .ninth {
        grid-column: span 4;
    }
    .tenth {
        grid-column: span 8;
    }
}
</style>
