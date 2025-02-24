document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'u9534644866_A_model_in_an_oversized_iridescent_windbreaker_re_0218a60b-a84b-411e-95ad-fdde59dca23c_0.png',
        'u9534644866_A_model_in_an_oversized_iridescent_windbreaker_re_0218a60b-a84b-411e-95ad-fdde59dca23c_3.png',
        'u9534644866_A_model_in_an_oversized_iridescent_windbreaker_re_6361ef1e-7064-402a-a70c-85f8ba795c66_0.png',
        'u9534644866_A_model_in_an_oversized_iridescent_windbreaker_re_6361ef1e-7064-402a-a70c-85f8ba795c66_1.png',
        'u9534644866_A_model_in_an_oversized_iridescent_windbreaker_re_6361ef1e-7064-402a-a70c-85f8ba795c66_2.png',
        'u9534644866_A_modern_slim-fit_monochrome_streetwear_look_feat_6be66b34-75e1-4171-9908-6960c00ea298_0.png',
        'u9534644866_A_modern_slim-fit_monochrome_streetwear_look_feat_b334a094-e0e8-41d8-8c02-3a43675ee6e3_0.png',
        'u9534644866_A_modern_slim-fit_monochrome_streetwear_look_feat_b334a094-e0e8-41d8-8c02-3a43675ee6e3_2.png',
        'u9534644866_A_modern_slim-fit_monochrome_streetwear_look_feat_b334a094-e0e8-41d8-8c02-3a43675ee6e3_3.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_5e7977f9-27b9-48f0-8cbf-c756118f5d0a_0.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_5e7977f9-27b9-48f0-8cbf-c756118f5d0a_1.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_5e7977f9-27b9-48f0-8cbf-c756118f5d0a_2.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_5e7977f9-27b9-48f0-8cbf-c756118f5d0a_3.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_a442593d-7b76-4de3-918e-3ca0c5d1398e_0.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_a442593d-7b76-4de3-918e-3ca0c5d1398e_1.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_a442593d-7b76-4de3-918e-3ca0c5d1398e_2.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_a442593d-7b76-4de3-918e-3ca0c5d1398e_3.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_afa817df-9dd4-4d0f-8cc4-8e8c309d17a1_0.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_afa817df-9dd4-4d0f-8cc4-8e8c309d17a1_1.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_afa817df-9dd4-4d0f-8cc4-8e8c309d17a1_2.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_afa817df-9dd4-4d0f-8cc4-8e8c309d17a1_3.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_d7144e93-ad87-4326-9d75-78e0407a250c_0.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_d7144e93-ad87-4326-9d75-78e0407a250c_1.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_d7144e93-ad87-4326-9d75-78e0407a250c_2.png',
        'u9534644866_A_tight-fit_motorsport-inspired_streetwear_look_f_d7144e93-ad87-4326-9d75-78e0407a250c_3.png',
        'u9534644866_Female_model_in_a_sleek_yet_oversized_asymmetrica_231f2203-4a16-419a-bb54-dad5a31db44e_0.png',
        'u9534644866_Female_model_in_a_sleek_yet_oversized_asymmetrica_619d5a5c-0d21-49b0-aeba-9d110714cfff_2.png',
        'u9534644866_Female_model_in_a_sleek_yet_oversized_asymmetrica_9836e561-1694-49f5-aeed-2347227de6a2_3.png',
        'u9534644866_Mid-range_shot_of_a_cyberpunk_model_in_a_futurist_4b905ee1-f027-4932-aa99-1095c5d30cda_0.png',
        'u9534644866_Mid-range_shot_of_a_cyberpunk_model_in_a_futurist_4b905ee1-f027-4932-aa99-1095c5d30cda_1.png',
        'u9534644866_Mid-range_shot_of_a_cyberpunk_model_in_a_futurist_4b905ee1-f027-4932-aa99-1095c5d30cda_3.png',
        'u9534644866_Mid-range_shot_of_a_cyberpunk_model_in_a_futurist_988f3cbd-288b-48bf-9063-44700450ae5f_0.png',
        'u9534644866_Mid-range_shot_of_a_cyberpunk_model_in_a_futurist_988f3cbd-288b-48bf-9063-44700450ae5f_2.png',
        'u9534644866_Mid-range_shot_of_a_cyberpunk_model_in_a_futurist_988f3cbd-288b-48bf-9063-44700450ae5f_3.png',
        'u9534644866_Mid-range_shot_of_a_cyberpunk_model_in_a_futurist_d36722b7-fb4e-4c85-993d-18f998608bd1_0.png',
        'u9534644866_Mid-range_shot_of_a_cyberpunk_model_in_a_futurist_d36722b7-fb4e-4c85-993d-18f998608bd1_2.png',
        'u9534644866_Ultra-realistic_streetwear_outfit_featuring_an_ov_bee89ab0-9303-4c72-b27f-49a4383864f4_1.png',
        'u9534644866_Ultra-realistic_streetwear_outfit_featuring_an_ov_f628e856-a40d-4fa9-a08d-0b370a051e56_0.png',
        'u9534644866_Ultra-realistic_streetwear_outfit_featuring_an_ov_f628e856-a40d-4fa9-a08d-0b370a051e56_2.png'
    ];

    const gallery = document.querySelector('.gallery');

    images.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'KICKASS Fashion Collection';
        img.loading = 'lazy';
        
        item.appendChild(img);
        gallery.appendChild(item);
    });

    // Smooth scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('img').style.transform = 'scale(1.1)';
            } else {
                entry.target.querySelector('img').style.transform = 'scale(1)';
            }
        });
    }, {
        threshold: 0.5
    });

    document.querySelectorAll('.gallery-item').forEach(item => {
        observer.observe(item);
    });
});


