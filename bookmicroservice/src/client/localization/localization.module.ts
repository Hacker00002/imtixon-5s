import { Module } from "@nestjs/common";
import { LocalizationService } from "./localization.service";

@Module({
    exports: [LocalizationService],
    providers: [LocalizationService],
})
export class LocalizationModule {}
