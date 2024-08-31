declare module "mousetrap-record" {
    import Mousetrap from "mousetrap";

    type RecordOptions = {
        onRecordComplete: (sequence: string[]) => void;
        onSequenceUpdate: (sequence: string[]) => void;
    };

    interface MousetrapStatic extends Mousetrap.MousetrapStatic {
        (el?: Element): MousetrapInstance;
        new (el?: Element): MousetrapInstance;
    }

    interface MousetrapInstance extends Mousetrap.MousetrapInstance {
        record(options: RecordOptions): () => void;
    }

    export default function attachRecorder(
        mousetrap: typeof Mousetrap
    ): MousetrapStatic;
}
