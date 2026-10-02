import { pipeline } from "@huggingface/transformers";

import Sounds from "../sounds.json";
let SoundsArray = $state(Sounds);
let tags = new Set(SoundsArray.flatMap(s => s.name));

let classifier: any = null;

// model choice 2 : 'Xenova/nli-deberta-v3-small'

export async function initModel() {
    if (classifier) return classifier;

    classifier = await pipeline(
        'zero-shot-classification',
        'Xenova/mobilebert-uncased-mnli',
        {
            progress_callback: (progressData) => {
                if (progressData.status === 'progress') {
                    const percent = Math.round(progressData.progress || 0);
                    console.log(`Downloading ${progressData.file}: ${percent}%`);
                } else if (progressData.status === 'ready') {
                    console.log(`Finished loading: ${progressData.task}`);
                }
            }
        }
    );

    return classifier;
}

export async function askClassifier(prompt: string, tags: Set<string>) {
    let result = await classifier(
        prompt,
        [...tags],
        { multi_label: true }
    );

    return result
}

export async function predictSounds(prompt: string) {
    const result = await askClassifier(prompt, tags);

    // console.log(result);

    result.labels.forEach((label: string, index: number) => {
        let volume = Math.min(100, result.scores[index] * 1000);

        let sound = SoundsArray.find(s => s.name === label);

        if (sound) {
            sound.volume = volume
        }
    });

    // console.log(SoundsArray)
}