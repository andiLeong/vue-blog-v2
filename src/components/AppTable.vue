<template>
    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-200">
            <tr>
                <slot name="th"></slot>
            </tr>
        </thead>
        <tbody>
            <slot name="tb"></slot>
        </tbody>
        <div>
            <slot name="footer"></slot>
        </div>
    </table>
</template>
